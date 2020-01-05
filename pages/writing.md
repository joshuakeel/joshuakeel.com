---
title: Writing
permalink: writing/index.html
---
I post a new article each week. These are the archives of everything I've written since 2014.

{%- for post in collections.post | reverse -%}
    <li class="flex flex-col mt-8">
        <span class="font-sans text-base text-gray-700">{{ post.date | readableDate }}</span>
        <h2 class="text-lg md:text-xl">
            <a class="font-medium font-serif-title" href="{{ post.url }}">{{ post.data.title }}</a>
        </h2>
    </li>
{%- endfor -%}