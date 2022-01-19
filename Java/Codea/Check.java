class Check{

    static Class typeof(Integer a)
    {
        return a.getClass();
    }
    static Class typeof(Character c)
    {
        return c.getClass();
    }
    static Class typeof(Float f)
    {
        return f.getClass();
    }
    static Class typeof(Double d)
    {
        return d.getClass();
    }
    static Class typeof(Long l)
    {
        return l.getClass();
    }
    static Class typeof(String s)
    {
        return s.getClass();
    }

}
// Thanks to @Progman for getClass() method
// check.typeof(12) ; // class java.lang.Integer
