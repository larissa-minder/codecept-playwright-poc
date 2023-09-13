Feature('Main Page');

Scenario('Login With valid user ',  ({ I}) => {
    
    I.doLogin('standard_user','secret_sauce' );
    I.see('Swag Labs', 'head > title')

}).tag('critical').tag('mobile').tag('tablet');


Scenario('Select burger menu',  ({ I }) => {
     
    I.doLogin('standard_user','secret_sauce' );
    I.click('#react-burger-menu-btn');
    I.click('#about_sidebar_link');
    I.see('The world relies on your code. Test on thousands of different device, browser, and OS configurations–anywhere, any time.', '.MuiBox-root.css-4q1zgn')


});
