<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::truncate();

        $user = new User;
        $user->name = "Miguel Angel Cornielly";
        $user->email = "mcornielly@gmail.com";
        $user->password = Hash::make('123456789');
        $user->save();
    }
}
