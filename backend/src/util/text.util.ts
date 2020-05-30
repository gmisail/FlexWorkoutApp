export default class Text
{
    static optimize(name: String)
    {
        return name.replace(/\s/g, '');
    }
}