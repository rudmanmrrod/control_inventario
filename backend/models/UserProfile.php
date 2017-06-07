<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "user_profile".
 *
 * @property integer $cedula
 * @property string $nombre
 * @property string $apellido
 * @property integer $fkuser
 *
 * @property User $fkuser0
 */
class UserProfile extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'user_profile';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['nombre', 'apellido', 'fkuser'], 'required'],
            [['fkuser'], 'integer'],
            [['nombre', 'apellido'], 'string', 'max' => 50],
            [['fkuser'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'cedula' => 'Cedula',
            'nombre' => 'Nombre',
            'apellido' => 'Apellido',
            'fkuser' => 'Fkuser',
        ];
    }

    /**
     * @return \yii\db\ActiveQuery
     */
    public function getFkuser0()
    {
        return $this->hasOne(User::className(), ['id' => 'fkuser']);
    }
}
