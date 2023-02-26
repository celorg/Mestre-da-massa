<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedidos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_produto');
            $table->integer('quantidade');
            $table->unsignedBigInteger('id_user');
            $table->float('valor_total', 8,2);
            $table->timestamps();

            $table->foreign('id_produto')->references('id')->on('produtos');

            $table->foreign('id_user')->references('id')->on('users');
            $table->unique('id_user');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pedidos');
    }
};
