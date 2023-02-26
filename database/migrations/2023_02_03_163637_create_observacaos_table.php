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
        Schema::create('observacoes', function (Blueprint $table) {
            $table->id();
            $table->text('descricao');
            $table->timestamps();
        });

        Schema::table('pedidos', function (Blueprint $table){
            $table->unsignedBigInteger('id_observacao');

            $table->foreign('id_observacao')->references('id')->on('observacoes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('pedidos', function(Blueprint $table){
            $table->dropForeign('observacoes_id_observacao_foreign');
            $table->dropColumn('id_observacao');
        });

        Schema::dropIfExists('observacoes');
    }
};
