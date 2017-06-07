<?php
namespace app\commands;
use Yii;
use yii\console\Controller;

/**
*   Clase que incluye las categorías al sistema
*   @author Rodrigo Boet
*   @date 26/11/2016
*/
class CategoriasController extends Controller
{
    public function actionMigrate()
    {
        $sql = file_get_contents(Yii::getAlias('@app').'/commands/categorias.sql');
        Yii::$app->db->createCommand($sql)->execute();
        echo "Se migro con exito";
    }

    public function actionTruncate()
    {
        Yii::$app->db->createCommand("DELETE FROM categoria")->execute();
        Yii::$app->db->createCommand("ALTER TABLE categoria auto_increment = 1")->execute();
        echo "Se vacio la tabla con exito";
    }
}