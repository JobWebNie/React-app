import React,{Component, Fragment} from 'react';
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';
import {postData} from '../api/fetch';
const FormItem = Form.Item;

const EditableContext = React.createContext();
const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
      <tr {...props} />
    </EditableContext.Provider>
  );
const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
    getInput = () => {
      if (this.props.inputType === 'number') {
        return <InputNumber />;
      }
      return <Input />;
    };
  
    render() {
      const {
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        ...restProps
      } = this.props;
      return (
        <EditableContext.Consumer>
          {(form) => {
            const { getFieldDecorator } = form;
            return (
              <td {...restProps}>
                {editing ? (
                  <FormItem style={{ margin: 0 }}>
                    {getFieldDecorator(dataIndex, {
                      rules: [{
                        required: true,
                        message: `Please Input ${title}!`,
                      }],
                      initialValue: record[dataIndex],
                    })(this.getInput())}
                  </FormItem>
                ) : restProps.children}
              </td>
            );
          }}
        </EditableContext.Consumer>
      );
    }
  }

class NssEditeSlider extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            pagination: {},
            loading: false,
            editingKey:''
          };
        this.columns = [
            { title: 'Name', dataIndex: 'name',editable: true},
            { title: 'Age', dataIndex: 'age',editable: true},
            { title: 'Address', dataIndex: 'address',editable: true},
            {
                title: 'operation',
                dataIndex: 'operation',
                render: (text, record) => {
                    const editable = this.isEditing(record);
                    return (
                    <div>
                        {editable ? (
                        <span>
                            <EditableContext.Consumer>
                            {form => (
                                <a
                                href=""
                                onClick={() => this.save(form, record.key)}
                                style={{ marginRight: 8 }}
                                >
                                Save
                                </a>
                            )}
                            </EditableContext.Consumer>
                            <Popconfirm
                            title="Sure to cancel?"
                            onConfirm={() => this.cancel(record.key)}
                            >
                            <a>Cancel</a>
                            </Popconfirm>
                        </span>
                        ) : (
                        <a onClick={() => this.edit(record.key)}>Edit</a>
                        )}
                    </div>
                    );
                },
            },
          ];
    }
    isEditing = (record) => {
        return record.key === this.state.editingKey;
    };
    edit(key) {
        this.setState({ editingKey: key });
    }
    save(form, key) {
        form.validateFields((error, row) => {
          if (error) {
            return;
          }
          const newData = [...this.state.data];
          const index = newData.findIndex(item => key === item.key);
          if (index > -1) {
            const item = newData[index];
            newData.splice(index, 1, {
              ...item,
              ...row,
            });
            this.setState({ data: newData, editingKey: '' });
          } else {
            newData.push(row);
            this.setState({ data: newData, editingKey: '' });
          }
        });
      }
    
      cancel = () => {
        this.setState({ editingKey: '' });
      };

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  }

  fetch = (params = {}) => {
    console.log('params:', params);
    this.setState({ loading: true });
    postData('http://localhost:3001/course').then((response)=>{
            const items = response.data
            const pagination = { ...this.state.pagination };
            // Read total count from server
            // pagination.total = data.totalCount;
            pagination.total = 200;
            this.setState({
                loading: false,
                data: items,
                pagination,
            });
        })
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };

    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === 'age' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    });

    return (
        <Fragment>
            <div className="article-body">
                <Table
                    components={components}
                    bordered
                    pagination={this.state.pagination}
                    dataSource={this.state.data}
                    columns={columns}
                    rowKey={record => record.key}
                    loading={this.state.loading}
                    onChange={this.handleTableChange}
                    rowClassName="editable-row"
                />
            </div>
        </Fragment>
    );
  }
}


export default NssEditeSlider;