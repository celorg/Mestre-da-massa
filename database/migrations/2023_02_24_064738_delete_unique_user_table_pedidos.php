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
        Schema::table('pedidos', function(Blueprint $table){
            $table->dropForeign('pedidos_id_user_foreign');
            $table->dropForeign('pedidos_id_observacao_foreign');

            $table->dropColumn('id_user');
            $table->dropColumn('id_observacao');
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
            $table->unsignedBigInteger('id_observacao');
            $table->unsignedBigInteger('id_user');
            
            $table->foreign('id_observacao')->references('id')->on('observacoes');
            $table->foreign('id_user')->references('id')->on('users');
        });
    }
};
