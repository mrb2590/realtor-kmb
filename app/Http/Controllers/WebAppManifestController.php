<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Vite;

class WebAppManifestController extends Controller
{
    /**
     * Generate the site.webmanifest.
     */
    public function show(): JsonResponse
    {
        return response()->json([
            'name' => config('app.name'),
            'short_name' => config('app.name'),
            'icons' => [
                [
                    'src' => Vite::asset('resources/img/icon/android-chrome-192x192.png'),
                    'sizes' => '192x192',
                    'type' => 'image/png'
                ],
                [
                    'src' => Vite::asset('resources/img/icon/android-chrome-512x512.png'),
                    'sizes' => '512x512',
                    'type' => 'image/png'
                ]
            ],
            'theme_color' => config('app.theme_color'),
            'background_color' => config('app.theme_color'),
            'display' => 'standalone',
            'start_url' => config('app.url')
        ]);
    }
}
