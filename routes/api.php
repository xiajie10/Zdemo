<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::post('login', 'Auth\PassportController@login');
Route::get('login/{token}', 'Auth\PassportController@getDetails');
Route::resource('files','WxApp\fileController');//图片上传
Route::resource('showMentors','WxApp\MentorController');