<?php

use yii\db\Schema;
use yii\db\Migration;

class m161126_213717_producto extends Migration
{
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            // http://stackoverflow.com/questions/766809/whats-the-difference-between-utf8-general-ci-and-utf8-unicode-ci
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE=InnoDB';
        }

        $this->createTable('{{%producto}}', [
            'pk_producto' => $this->primaryKey(),
            'codigo' => $this->string(50)->notNull()->unique(),
            'nombre' => $this->string(50)->notNull(),
            'descripcion' => $this->text()->notNull(),
            'fk_categoria' => $this->integer()->notNull(),
        ], $tableOptions);

        $this->createIndex('i-fk_categoria','producto','fk_categoria');
        $this->addForeignKey('categoria-producto','producto','fk_categoria','categoria','pk_categoria','CASCADE','CASCADE');
    }

    public function down()
    {
        $this->dropTable('{{%producto}}');
    }

    /*
    // Use safeUp/safeDown to run migration code within a transaction
    public function safeUp()
    {
    }

    public function safeDown()
    {
    }
    */
}
