<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class ListingsController extends Controller
{
    /**
     * Show the home page.
     */
    public function show(): Response
    {
        return Inertia::render('Listings');
    }
}
