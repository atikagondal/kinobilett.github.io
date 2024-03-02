package model;

public class Purchase {
    private int orderId;
    private String customerName;
    private String movieTitle;

    //konstruktør, gettere og settere

    //konstruktør
    public Purchase(int orderId, String customerName, String movieTitle){
        this.orderId=orderId;
        this.customerName=customerName;
        this.movieTitle=movieTitle;
    }

    //gettere og settere for konstruktørene
    public int getOrderId(){
        return orderId;
    }
    public void setOrderId(int orderId){
        this.orderId=orderId;
    }
    public String getCustomerName(){
        return customerName;
    }
    public void setCustomerName(String customerName){
        this.customerName=customerName;
    }

    public String getMovieTitle(){
        return movieTitle;
    }
    public void setMovieTitle(String movieTitle){
        this.movieTitle=movieTitle;
    }
}


