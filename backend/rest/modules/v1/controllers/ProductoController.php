<?php

namespace app\rest\modules\v1\controllers; 

use Yii;
use yii\rest\ActiveController;
use yii\filters\ContentNegotiator;
use yii\web\Response;

class ProductoController extends ActiveController
{

	public $modelClass = 'app\models\Producto';
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'contentNegotiator' => [
                'class' => ContentNegotiator::className(),
                'formats' => [
                    'application/json' => Response::FORMAT_JSON,
                ],
            ],
        ];
    }
	
	public function actions()
	{
		$actions = parent::actions();
		// disable the "delete" actions
		unset($actions['delete']);
		return $actions;
	}

}