<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap" rel="stylesheet">


        <link rel="manifest" href="/site.webmanifest">
        <meta name="application-name" content="{{ config('app.name') }}">
        <meta name="apple-mobile-web-app-title" content="{{ config('app.name') }}">
        <link rel="apple-touch-icon" sizes="180x180" href="{{ Vite::asset('resources/img/icon/apple-touch-icon.png') }}">
        <link rel="icon" type="image/png" sizes="32x32" href="{{ Vite::asset('resources/img/icon/favicon-32x32.png') }}">
        <link rel="icon" type="image/png" sizes="16x16" href="{{ Vite::asset('resources/img/icon/favicon-16x16.png') }}">
        <link rel="shortcut icon" href="{{ Vite::asset('resources/img/icon/favicon.ico') }}">
        <link rel="mask-icon" href="{{ Vite::asset('resources/img/icon/safari-pinned-tab.svg') }}" color="{{ config('app.theme_color') }}">
        <meta name="msapplication-TileColor" content="{{ config('app.theme_color') }}">
        <meta name="theme-color" content="{{ config('app.theme_color') }}">

        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body>
        @inertia
    </body>
</html>
