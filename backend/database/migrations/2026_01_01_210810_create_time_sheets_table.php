<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('time_sheets', function (Blueprint $table) {
            $table->id();
            $table->dateTime('arrivalTime')->nullable();
            $table->dateTime('beforeBreak')->nullable();
            $table->dateTime('afterBreak')->nullable();
            $table->dateTime('departureTime')->nullable();
            $table->boolean('late')->default(false);
            $table->boolean('sick')->default(false);
            $table->boolean('holiday')->default(false);
            $table->foreignId('user_id')->constrained()->cascadeOnDelete()->cascadeOnUpdate();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('time_sheets');
    }
};
