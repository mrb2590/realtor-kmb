<!DOCTYPE html>
<html  lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>@yield('title')</title>
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

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #075985;
                font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                font-weight: 400;
                font-size: 16px;
                height: 100vh;
                margin: 0;
            }

            .container {
                display: flex;
                width: 100%;
                height: 100%;
                justify-content: center;
                align-items: center;
            }

            .content {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: 1rem;
                width: 100%;
                max-width: 300px;
            }

            .logo {
                text-align: center;
                width: 100%;
                max-width: 300px;
                margin-bottom: 2rem;
            }

            .message {
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            .code {
                font-size: 2rem;
                text-align: center;
                padding-right: 1rem;
                border-right: 2px solid #075985;
            }

            .title {
                font-size: 1.5rem;
                text-align: center;
                margin-left: 1rem;
            }

        </style>
    </head>
    <body>
        <div class="container">
            <div class="content">
                <div class="logo">
                    <img src="{{ Vite::asset('resources/img/logo/realtor-kmb-logo.svg') }}" alt="{{ config('app.name') }}">
                </div>
                <div class="message">
                    <div class="code">
                        @yield('code')
                    </div>
                    <div class="title">
                        @yield('message')
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
