<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('app');
});

// =======================================================================

// Route::prefix('admin')->group(function () {
//     // Route::get('dashboard', function () {
//     //     return view('app');
//     // });
//     Route::get('test', function () {
//         return view('app');
//     });
// });
Route::any('admin/{slug}', function () {
    return view('app');
});

// =======================================================================

Route::any('{slug}', function () {
    return view('app');
});
