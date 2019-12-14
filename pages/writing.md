---
title: Writing
permalink: writing/index.html
---
I post a new article each week. Here are all the articles I've written.

{%- for post in collections.post | reverse -%}
    <li class="flex flex-col mt-8">
        <span class="font-sans text-base text-gray-700">{{ post.date | readableDate }}</span>
        <h3>
            <a class="font-medium font-serif-title" href="{{ post.url }}">{{ post.data.title }}</a>
        </h3>
    </li>
{%- endfor -%}