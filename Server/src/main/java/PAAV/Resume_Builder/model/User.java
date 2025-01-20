package PAAV.Resume_Builder.model;

public class User {
    private String email;
    private String password;
    private String confirmPassword;  // Add confirmPassword field

    // Getters and Setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getConfirmPassword() {  // Add getConfirmPassword method
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {  // Add setConfirmPassword method
        this.confirmPassword = confirmPassword;
    }
}
