---
title: Python
date: 2023-05-19 09:01:57
tags:
---

>>>print('The quick brown fox', 'jumps over', 'the lazy dog')
The quick brown fox jumps over the lazy dog
print()会依次打印每个字符串，遇到逗号“,”会输出一个空格

name = input()
print('hello,', name)

name = input('please enter your name: ')
print('hello,', name)

变量本身类型不固定的语言称之为动态语言，与之对应的是静态语言。静态语言在定义变量时必须指定变量类型
int a = 123; // a是整数类型变量
a = "ABC"; // 错误：不能把字符串赋给整型变量