<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FaviconController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ListingsController;
use App\Http\Controllers\PrivacyPolicyController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\TermsConditionsController;
use App\Http\Controllers\WebAppManifestController;
use Illuminate\Support\Facades\Route;

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

Route::get('/', [HomeController::class, 'show'])->name('home');

Route::get('/favicon.ico', [FaviconController::class, 'show']);

Route::get('/site.webmanifest', [WebAppManifestController::class, 'show']);

Route::get('/about', [AboutController::class, 'show'])->name('about');
Route::get('/services', [ServicesController::class, 'show'])->name('services');
Route::get('/contact', [ContactController::class, 'show'])->name('contact');
Route::get('/listings', [ListingsController::class, 'show'])->name('listings');
Route::get('/privacy-policy', [PrivacyPolicyController::class, 'show'])->name('privacy-policy');
Route::get('/terms-conditions', [TermsConditionsController::class, 'show'])->name(
    'terms-conditions'
);

Route::get('/dashboard', [DashboardController::class, 'show'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
