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
          date: '',
        };
      }
      handleChange(date) {
        this.setState({ date });
      }
      render() {
        return (
          <Fragment>
          <Slider path="docs"/>
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
                <AntOtherMore></AntOtherMore>
                <AntBackTop></AntBackTop>
              </Fragment>
            </LocaleProvider>
          </div>
          </Fragment>
        );
      }
}

export default Docs