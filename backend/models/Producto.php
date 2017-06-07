<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "producto".
 *
 * @property integer $pk_producto
 * @property string $codigo
 * @property string $nombre
 * @property string $descripcion
 * @property integer $fk_categoria
 *
 * @property Categoria $fkCategoria
 */
class Producto extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'producto';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['codigo', 'nombre', 'descripcion', 'fk_categoria'], 'required'],
            [['descripcion'], 'string'],
            [['fk_categoria'], 'integer'],
            [['codigo', 'nombre'], 'string', 'max' => 50],
            [['codigo'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'pk_producto' => 'Pk Producto',
            'codigo' => 'Codigo',
            'nombre' => 'Nombre',
            'descripcion' => 'Descripcion',
            'fk_categoria' => 'Fk Categoria',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkCategoria()
    {
        return $this->hasOne(Categoria::className(), ['pk_categoria' => 'fk_categoria']);
    }
}
