<?php

namespace Database\Seeders;

use App\Models\Categoria;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {   
        Categoria::create([
            'categoria' => 'Pizza',
        ]);
        Categoria::create([
            'categoria' => 'Esfiha',
        ]);
        Categoria::create([
            'categoria' => 'Bebida',
        ]);
    }
}
