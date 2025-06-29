<?php
namespace Api\Controller;
use Think\Controller;
class AdminUserController extends BaseController {


    //获取所有用户列表
    public function getList(){
        $login_user = $this->checkLogin();
        $this->checkAdmin();
        $page = I("page/d");
        $count = I("count/d");
        $username = I("username");
        $where = " 1 = 1 ";
        if ($username) {
            $username = \SQLite3::escapeString($username);
           $where .= " and username like '%{$username}%' ";
        }
        $Users = D("User")->where($where)->page($page ,$count)->order(" uid desc  ")->select();
        $total = D("User")->where($where)->count();
        $return = array() ;
        $return['total'] = (int)$total ;
        if ($Users) {
            foreach ($Users as $key => &$value) {
                $value['reg_time'] = date("Y-m-d H:i:s" , $value['reg_time']);
                if($value['last_login_time']){
                    $value['last_login_time'] = date("Y-m-d H:i:s" , $value['last_login_time']);
                }else{
                    $value['last_login_time'] = '';
                }
            }
            $return['users'] = $Users ;
            $this->sendResult($return);
        }else{
            $this->sendResult(array());
        }
    }

    //删除用户
    public function deleteUser(){
        $login_user = $this->checkLogin();
        $this->checkAdmin();
        $uid = I("post.uid/d");

        if (D("Item")->where("uid = '$uid' and is_del = 0 ")->find()) {
           $this->sendError(10101,"该用户名下还有项目，不允许删除。请先将其项目删除或者重新分配/转让"); 
           return ;
        }
        $return = D("User")->delete_user($uid);
        if (!$return) {
            $this->sendError(10101);
        }else{
            $this->sendResult($return);
        }
    }

    //修改密码
    public function changePassword(){
        $login_user = $this->checkLogin();
        $this->checkAdmin();
        $uid = I("post.uid/d");
        $new_password = I("new_password");

        $return = D("User")->updatePwd($uid, $new_password);
        if (!$return) {
            $this->sendError(10101);
        }else{
            $this->sendResult($return);
        }
    }


    //新增用户
    public function addUser(){
        $login_user = $this->checkLogin();
        $this->checkAdmin();
        $username = I("post.username");
        $password = I("post.password");
        $uid = I("post.uid/d");
        $name = I("post.name");
        if(!$username){
            $this->sendError(10101,'用户名不允许为空');
            return ;
        }
        if($uid){
            if($password){
                D("User")->updatePwd($uid, $password);
            }
            if($name){
                D("User")->where(" uid = '$uid' ")->save(array("name"=>$name));
             }
             $this->sendResult(array());
        }else{
            if (D("User")->isExist($username)) {
                $this->sendError(10101,L('username_exists'));
                return ;
             }
             $new_uid = D("User")->register($username,$password);
             if (!$new_uid) {
                 $this->sendError(10101);
             }else{
                 if($name){
                    D("User")->where(" uid = '$new_uid' ")->save(array("name"=>$name));
                 }
                 $this->sendResult($return);
             }
        }

    }



}