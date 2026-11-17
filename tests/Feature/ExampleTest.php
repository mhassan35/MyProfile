<?php

namespace Tests\Feature;

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
}
