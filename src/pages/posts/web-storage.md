---
title: Web Storage
description: Cookies、localStorage、sessionStorage 本地存储的区别
date: 2022-07-03T02:48:00.000+00:00
lang: zh
duration: 5min
art: particles
---

## Cookies

- **定义:** Cookies是存储在浏览器中的小段数据，通常用于存储用户的会话信息或者网站的状态信息。
- **用途:** 常用于存储用户会话、认证令牌等状态信息。
- **数据格式：** Cookies以键值对（key=value）的形式存储，可以附带属性如expires（过期时间）、path（路径）、domain（域名）等。
- **大小限制：** 单个Cookie的大小通常限制在4KB左右，且大多数浏览器对每个域名下的总Cookie数量也有限制。
- **域名特定：** 每个Cookie与特定的域名相关联，会随着每次HTTP请求一同发送到对应的域名。
- **服务器交互性：** Cookie 可由服务器设置并通过HTTP头部在客户端与服务器间传递，使得服务器能识别并追踪用户的特定会话信息。
- **安全性考量：** 尽管存在安全隐患，但可通过HttpOnly标志防止XSS攻击，Secure标志保证HTTPS安全传输。
- **JavaScript API：** 可以通过document.cookie来访问和操作Cookie。
- **有效期：** 可以设置过期时间（expires），或者设为会话Cookie（浏览器关闭时删除）。

## localStorage

- **定义：** localStorage是Web存储API的一部分，允许网站在浏览器中持久性地存储数据。
- **用途：** 适合存储较大量的数据，如用户偏好设置、缓存数据等。
- **数据格式：** localStorage以键值对的形式存储数据，支持用JSON.stringify存储JavaScript对象。
- **大小限制：** 通常比Cookie大，每个域名最多可存储约5MB的数据。
- **安全性考量：** 受同源策略限制，且不参与网络请求，适合存储非敏感数据。
- **JavaScript API：** 通过JavaScript的localStorage进行操作，支持键值对存储模型。（setItem，getItem用来存储和取出数据）。
- **有效期：** localStorage中的数据在用户不清除浏览器数据的情况下会持久保存。

## sessionStorage

- **定义：** sessionStorage是Web存储API的一部分，允许网站在浏览器中临时存储数据。
- **用途：** 适合存储较短时间的数据，如表单数据、临时会话信息等。
- **数据格式：** sessionStorage以键值对的形式存储数据，支持用JSON.stringify存储JavaScript对象。
- **大小限制：** 与localStorage相似，取决于浏览器。
- **安全性考量：** 同样遵循同源策略，不参与网络请求。
- **JavaScript API：**  通过JavaScript的sessionStorage进行操作，支持键值对存储模型。（setItem，getItem用来存储和取出数据）。
- **有效期：** 仅在当前浏览器会话期间有效，标签页或窗口关闭即失效。

## 区别

#### 一、存储的时间有效期不同

1. cookie的有效期是可以设置的，默认的情况下是关闭浏览器后失效。
2. localStorage的有效期是在不进行手动删除的情况下是一直有效的。
3. sessionStorage的有效期是仅保持在当前页面，关闭当前会话页或者浏览器后就会失效。

####  二、存储的大小不同

1. cookie的存储是4KB左右，存储量较小，并且每个域名下的cookie总数也有限制。
2. localStorage和sessionStorage的存储容量通常限制在5MB左右，可以存储更大量的数据。

####  三、与服务端的通信

1. cookie会参与到与服务端的通信中，一般会携带在http请求的头部中，例如一些关键密匙验证等。
2. localStorage和sessionStorage是单纯的前端存储，不参与与服务端的通信。

####  四、作用域不同

1. sessionStorage不在不同浏览器中共享，即使是同一个页面。
2. localStorage和cookie是在所有同源的窗口中都是共享的。

