<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>@yield('title')</title>

        @vite('node_modules/font-awesome-scss/scss/font-awesome.scss')
        {{-- @vite('node_modules/bootstrap/scss/bootstrap.scss') --}}

        @vite('resources/scss/app.scss')

        @if (false)
            @vite('resources/scss/dir/rtl.scss')
        @endif

        @yield('headerStyles')
        @yield('headerScripts')
    </head>
    <body>
        @yield('content')

        {{-- @vite('node_modules/jquery/dist/jquery.min.js') --}}
        {{-- @vite('node_modules/bootstrap/dist/js/bootstrap.bundle.min.js') --}}
        @vite('resources/js/app.js')
        @vite('resources/frontend/app.js')

        @yield('footerStyles')
        @yield('footerScripts')
    </body>
</html>
