public class token {
    public static String createToken(){
        final String chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        String token = '';
        while (token.length() < 16) {
            Integer idx = Math.mod(Math.abs(Crypto.getRandomInteger()), chars.length());
            token += chars.substring(idx, idx+1);
        }
        return token;
    }
}