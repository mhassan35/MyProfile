<?php

namespace Tests\Feature;

use Illuminate\Support\Facades\Route;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    public function test_public_portfolio_pages_do_not_require_a_database(): void
    {
        config([
            'database.connections.sqlite.database' => sys_get_temp_dir().DIRECTORY_SEPARATOR.'portfolio-no-database-'.bin2hex(random_bytes(8)).'.sqlite',
            'session.driver' => 'cookie',
        ]);

        $this->get(route('home'))->assertOk();
        $this->get(route('work'))->assertOk();
    }

    public function test_forwarded_https_is_used_when_generating_asset_urls(): void
    {
        Route::get('/_test/proxy-asset-url', fn () => response()->json([
            'asset' => asset('build/assets/app.css'),
        ]));

        $response = $this->withServerVariables([
            'HTTP_X_FORWARDED_PROTO' => 'https',
            'HTTP_X_FORWARDED_PORT' => '443',
        ])->get('/_test/proxy-asset-url');

        $response->assertOk();
        $this->assertStringStartsWith('https://', $response->json('asset'));
    }
}
