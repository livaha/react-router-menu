
export default class Menu{
    static menulist(option){
    return [
    {
        title: 'System management',
        //icon:'&#xe66d;',
        key: '/sysManagement',
        type:'',
        children: [
            {
                title: 'Administrator Setting',
                key: '/sysManagement/admin',
                type:'',
            },
        ]
    },
    
    ]}
}