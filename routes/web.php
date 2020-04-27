<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/admin',function (){
    return view('admin');
});
Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');
Route::group(array('prefix'=>'wxApp'),function(){
    Route::get('showMentors','WxApp\MentorController@index');//走马灯
    Route::get('files','WxApp\fileController@index');//图片上传
});