//使用ES6导入语法，导入jQuery
import $ from 'jquery'
import './css/index.css'
import './css/index1.less'

//2.定义 jQuery 的入口函数
$(function (){
    //3.实现奇偶行变色
    //奇数红色
    $('li:odd').css('background-color','red')
    $('li:even').css('background-color','cyan')
})

class Person{
    static info = "person info"
}

console.log(Person.info);

