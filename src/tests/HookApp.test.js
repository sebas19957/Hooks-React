const { shallow } = require("enzyme");
const { HookApp } = require("../HookApp");

describe('Pruebas en <HookApp/>', () => {

    test('Debe mostrarse correctamente ', () => {
       const wrapper = shallow(<HookApp/>) ;
       expect(wrapper).toMatchSnapshot();
    });
});
