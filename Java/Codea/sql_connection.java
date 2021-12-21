    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.PreparedStatement;
    import java.sql.SQLException;
 
    public class ConnectionDB {
        
        public static void main(String[] args) throws Exception{
            
        }
        
        public static Connection getConnection() throws SQLException {
 
            try {
                Class.forName("com.mysql.jdbc.Driver");
                Connection con= DriverManager.getConnection("jdbc:mysql://localhost:3306/storehouse", "root", "admin");
                System.out.println("Succes!");
                return con;
            } catch (ClassNotFoundException e) {
                System.out.println(e);
            }
            return null;
        }
        public static void post(String tableName, String columnName, String value) throws Exception{
            try {
                Connection con= getConnection();
                PreparedStatement post= con.prepareStatement("INSERT INTO "+tableName+" ("+columnName+") VALUES ('"+value+"')");
                post.executeUpdate(); 
                con.close();
            } catch(Exception e) {
                System.out.println(e);
            } finally {
                System.out.println("Insert sucess!");
            }
            
        }
 
    }
// https://pastebin.com/2F28aTvz
