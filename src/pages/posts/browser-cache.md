---
title: 强缓存和协商缓存
description: 详解浏览器中的强缓存和协商缓存
date: 2022-07-05T03:44:00.000+00:00
lang: zh
duration: 10min
art: particles
---

## 强缓存

### 概念

强缓存指的是在缓存有效期内，不需要向服务器发送请求，直接从缓存中读取资源。这意味着在缓存有效期内，浏览器直接使用缓存的资源，不会与服务器通信。

### 好处

1. 减少服务器负载：减少了不必要的请求，服务器负载显著降低。
2. 提高页面加载速度：资源直接从本地缓存中读取，减少了网络延迟，页面加载速度更快。
3. 节省带宽：避免重复下载相同的资源，节省了带宽资源。
4. 改善用户体验：快速的页面加载提高了用户满意度和留存率。

### 如何开启

强缓存主要通过 HTTP 响应头中的 Expires 和 Cache-Control 属性来实现。这些属性是由服务器在响应中设置的，并指示浏览器如何缓存资源。

### 详细说明

#### Expires

- 描述：http 1.0 的规范，它的值为一个绝对时间的GMT格式的时间字符串。
- 作用：这个时间代表着这个资源的失效时间，在此时间之前，即命中缓存，缓存的资源被认为是有效的。这种方式有一个明显的缺点，由于失效时间是一个绝对时间，所以当服务器与客户端时间偏差较大时，就会导致缓存混乱。
- 位置：响应头
- 例子：Expires: Fri, 05 Jul 2024 10:58:00 GMT

#### Cache-Control

- 描述：http 1.1 的规范，优先级高于 Expires，表示的是相对时间。
- 作用：更现代、更灵活的缓存控制方式，可以定义更细粒度的缓存策略，主要是利用该字段的 max-age 值来进行判断缓存是否过期。
- 位置：响应头
- 例子：Cache-Control: max-age=315360000
- 常用指令：

  **max-age：** 相对时间，以秒为单位。例如：Cache-Control: max-age=3600 表示资源可以缓存 3600 秒（1 小时）。 <br/>
  **no-cache：** 不使用强缓存，每次都要向服务器发送请求以确认资源是否改变。 <br/>
  **no-store：** 不缓存资源，完全禁用缓存。 <br/>
  **public：** 表示响应可以被任何缓存存储（包括浏览器和中间代理服务器）。 <br/>
  **private：** 表示响应只能被单个用户的浏览器缓存，不允许代理缓存。 <br/>

## 协商缓存

### 概念

协商缓存需要客户端和服务器之间的交互。当缓存资源过期时，客户端会向服务器发送请求，服务器根据请求头中的信息判断客户端缓存的资源是否仍然有效。

### 好处

1. 节省带宽：对于未修改的资源，服务器只返回状态码而不发送资源内容，节省了带宽。
2. 减少延迟：即使需要与服务器通信，304 响应也比完全下载新的资源更快。
3. 保持资源最新：确保浏览器使用的是最新版本的资源，提高了数据的一致性和可靠性。
4. 平衡性能与新鲜度：在减少不必要请求的同时，确保资源的实时更新。

### 如何开启

协商缓存使用的主要属性是服务器返回的 Last-Modified 和 ETag，而在下次请求时会使用 If-Modified-Since 和 If-None-Match， 它们的值在实现协商缓存时起着关键作用。

### 详细说明

#### Last-Modified:（服务器响应）

- 含义: 资源的最后修改时间。
- 格式: 一个 GMT 格式的时间字符串。
- 示例: Last-Modified: Fri, 05 Jul 2024 12:01:11 GMT
- 备注：和 If-Modified-Since 配合使用

#### If-Modified-Since:（请求头携带）

- 含义: 客户端发送的请求头，其值通常是上次请求时服务器返回的 Last-Modified 值。
- 用途: 服务器根据这个值判断资源是否有更新。

#### ETag:（服务器响应）

- 含义: 资源的唯一标识符，通常是资源内容的哈希值或版本号。
- 示例: ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
- 备注：和 If-None-Match 配合使用

#### If-None-Match: （请求头携带，优先级更高）

- 含义: 客户端发送的请求头，其值通常是上次请求时服务器返回的 ETag 值。
- 用途: 服务器根据这个值判断资源是否有更新。

### 协商缓存的工作流程

**首次请求：** 浏览器请求资源，服务器返回资源内容以及 Last-Modified 和/或 ETag。<br/>
**后续请求：** 浏览器再次请求该资源时，会带上 If-Modified-Since 和/或 If-None-Match 请求头。（当资源被缓存后，浏览器会根据之前服务器响应中的缓存头信息，在后续请求中自动添加这些请求头，以实现协商缓存机制。）<br/>
**服务器响应：** 如果资源未修改，服务器返回 304 Not Modified 状态码，不包含消息体，浏览器继续使用缓存资源。<br/>

如果资源已修改，服务器返回 200 OK 状态码和新的资源内容，同时更新 Last-Modified 和/或 ETag。

### 优先级

- 服务器首先会检查If-None-Match中的 ETag 值是否与服务器上该资源的当前 ETag 值匹配。
- 如果 ETag 匹配成功（即资源内容未发生变化），服务器会返回 304 Not Modified 状态码，并结束响应，不再检查Last-Modified。
- 如果ETag匹配失败（即资源内容可能发生变化），服务器会继续检查If-Modified-Since中的 Last-Modified值（这提供了一个"双重检查"的机制，有助于在各种情况下优化资源传输）。
- ETag 的优先级高于Last-Modified。这是因为 ETag 是基于资源内容生成的唯一标识符，能够更加准确地反映资源是否发生变化。而 Last-Modified 只是记录了资源最后修改的时间戳，可能会因为某些原因（如服务器时间设置不准确、文件被定期生成但内容未变等）而导致不准确。

## 综合对比

| 特性/机 制   | 强缓存                                       | 协商缓存                                                                                                            |
| ------------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| 定义         | 浏览器直接从缓存中读取资源，无需与服务器通信 | 浏览器向服务器验证缓存资源的有效性                                                                                  |
| 实现方式     | HTTP 头信息中的 Expires 和 Cache-Control     | HTTP 头信息中的 Last-Modified 和 ETag                                                                               |
| 响应头       | Expires, Cache-Control                       | ETag, Last-Modified                                                                                                 |
| 请求头       | 无需特定请求头                               | If-None-Match, If-Modified-Since                                                                                    |
| 匹配优先级   | 无                                           | ETag 优先级高于 Last-Modified                                                                                       |
| 匹配原理     | 根据缓存有效期直接使用缓存                   | 浏览器发送上次接收的 ETag 或 Last-Modified，服务器比较并返回 304 或 200                                             |
| 处理流程     | 浏览器检查缓存有效期，若有效直接使用         | 浏览器请求资源时，发送 If-None-Match 和 If-Modified-Since，服务器根据 ETag 和 Last-Modified 判断是否返回 304 或 200 |
| 典型场景     | 静态资源如图片、CSS、JS 文件                 | 动态资源或频繁更新的资源                                                                                            |
| 缓存控制     | 由浏览器控制，依赖于缓存策略和有效期         | 由服务器控制，通过生成和验证 ETag 和 Last-Modified 实现                                                             |
| 优先级处理   | 不涉及优先级                                 | 服务器优先检查 If-None-Match，ETag 不匹配时直接返回 200，不再检查 If-Modified-Since                                 |
| 资源变化检测 | 依赖于缓存时间，不检测内容变化               | 基于内容 (ETag) 或修改时间 (Last-Modified) 检测资源变化                                                             |
| 缓存策略     | 通过设置缓存有效期控制                       | 通过服务器和浏览器间的缓存验证控制                                                                                  |
| 优势         | 减少网络请求，提升加载速度                   | 确保资源最新状态，节省带宽                                                                                          |
| 劣势         | 可能使用过期的缓存，无法实时更新             | 增加请求开销，需要服务器支持                                                                                        |