import React,{Component,Fragment} from 'react';
import { LocaleProvider } from 'antd';
import AntButton from './page/button';
import AntIcon from './page/icon';
import AntGrid from './page/grid';
import AntLayout from './page/layout';
import AntAffix from './page/affix';
import AntBreadcrumb from './page/breadcrumb';
import AntDropdown from './page/dropdown';
import AntMenu from './page/menu';
import AntPagination from './page/pagination';
import AntAutoComplete from './page/auto-complete';
import AntRate from './page/rate';
import AntSelect from './page/select';
import AntTreeSelect from './page/tree-select';
import AntCard from './page/card';
import AntCarousel from './page/carousel';
import AntOtherMore from './page/other';
import AntBackTop from './page/backtop';
import Slider from './Slider';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'antd/dist/antd.css'

class Docs extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sections:[
              {
                items:[
                    {
                      id:"antd-button",
                      title:"Antd Button 按钮"
                    },
                    {
                      id:"antd-icon",
                      title:"Antd Icon 图标"
                    },
                    {
                      id:"antd-grid",
                      title:"Antd Grid 栅格"
                    },
                    {
                      id:"antd-layout",
                      title:"Antd Layout 布局"
                    },
                    {
                      id:"antd-affix",
                      title:"Antd Affix 固定"
                    }
                ],
                title:"组成 布局",
              },
              {
                items:[
                    {
                      id:"#antd-breadcrumb",
                      title:"Antd Breadcrumb 面包屑"
                    },
                    {
                      id:"#antd-dropdown",
                      title:"Antd Dropdown 下拉"
                    },
                    {
                      id:"#antd-menu",
                      title:"Antd Menu 菜单"
                    },
                    {
                      id:"#antd-pagination",
                      title:"Antd Pagination 分页"
                    },
                    {
                      id:"#antd-auto-complete",
                      title:"Antd AutoComplete 补全"
                    },
                    {
                      id:"#antd-rate",
                      title:"Antd Rate 评分"
                    },
                    {
                      id:"#antd-select",
                      title:"Antd Select 筛选"
                    },
                    {
                      id:"#antd-tree-select",
                      title:"Antd TreeSelect 树选择"
                    },
                    {
                      id:"#antd-card",
                      title:"Antd Card 卡片"
                    },
                    {
                      id:"#antd-carousel ",
                      title:"Antd Carousel 跑马灯"
                    },
                    {
                      id:"#antd-back-top",
                      title:"Antd BackTop 回到顶部"
                    },
                ],
                title:"导航 数据",
              }      
          ]
        };
      }
      handleChange(date) {
        this.setState({ date });
      }
      render() {
        return (
          <Fragment>
          <Slider sections={this.state.sections}/>
          <div className="article">
            <LocaleProvider locale={zhCN}>
              <Fragment>
                <AntButton></AntButton>
                <AntIcon></AntIcon>
                <AntGrid></AntGrid>
                <AntLayout></AntLayout>
                <AntAffix></AntAffix>
                <AntBreadcrumb></AntBreadcrumb>
                <AntDropdown></AntDropdown>
                <AntMenu></AntMenu>
                <AntPagination></AntPagination>
                <AntAutoComplete></AntAutoComplete>
                <AntRate></AntRate>
                <AntSelect></AntSelect>
                <AntTreeSelect></AntTreeSelect>
                <AntCard></AntCard>
                <AntCarousel></AntCarousel>
                <AntBackTop></AntBackTop>
                <AntOtherMore></AntOtherMore>
              </Fragment>
            </LocaleProvider>
          </div>
          </Fragment>
        );
      }
}

export default Docs