<?php

use Kirby\Cms\Field;

Kirby::plugin('marcf/selectoptgroup', [
    'fields' => [
        'selectoptgroup' => [
            'extends' => 'select',
            'save' => function ($value) {
                $page = page()->current();
                // Here I want to add new field to this page
                return $value;
            }
        ]
    ]
]);
