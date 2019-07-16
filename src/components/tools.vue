 <template>
  <div id="tools">
    <el-header class="header">
      <el-row>
        <el-col :span="6">
          <div>
            <router-link :to="{path:'/',query:{t:Date.now()}}">
              <i class="fa fa-home" aria-hidden="true"></i>
            </router-link>
          </div>
        </el-col>
        <el-col :span="6" :offset="12">
          <el-dropdown placement='top'>
            <span class="el-dropdown-link">
              <i class="fa fa-caret-square-o-down" aria-hidden="true"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="toQuote">
                <a>每日一言</a>
              </el-dropdown-item>
              <el-dropdown-item @click.native="toBulletScreen">
                <a>弹幕</a>
              </el-dropdown-item>
              <el-dropdown-item @click.native="toSearchWiki">
                <a>搜索</a>
              </el-dropdown-item>
              <el-dropdown-item @click.native="toCalc">
                <a>计算器</a>
              </el-dropdown-item>
              <el-dropdown-item @click.native="toTimeout">
                <a>番茄计时</a>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
    <!-- 这个动画不能在组件改变时生效, 也试了:is和:model -->
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <router-view></router-view>
    </transition>
  </div>
</template>

 <script>
import "font-awesome/css/font-awesome.min.css";

export default {
  name:'tools',
  data() {
    return {

    };
  },
  methods: {
    toQuote(){
      this.$router.push({
          path:"quote",
      });
    },
    toBulletScreen(){
      this.$router.push({
          path:"bulletScreen",
      });
    },
    toSearchWiki(){
      this.$router.push({
          path:"searchWiki",
      });
    },
    toCalc(){
      this.$router.push({
          path:"calc",
      });
    },
    toTimeout(){
      this.$router.push({
          path:"timeout",
      });
    }
  },
  components: {
    
  }
};
</script>

 <style scoped>
#tools {
  height: 100vh;
  width: 100%;
  /* background-color: darkgray; */
  font-size: 36px;
  text-align: center;
}
.el-dropdown-link {
  cursor: pointer;
  color: white;
  font-size: 36px;
}
.el-icon-arrow-down {
  font-size: 36px;
}
.header {
  height: 16vh !important;
  padding-top: 30px;
  background-color:#1E1F26;
  /* box-shadow: 0 0 10px #1E1F26; */
}
.header a {
  color: white;
}

</style>
 
 