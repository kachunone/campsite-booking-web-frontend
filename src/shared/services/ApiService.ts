const BASE_URL = "http://localhost:8080";

class ApiService {
  static async getCampsites(): Promise<any> {
    try {
      const response = await fetch(`${BASE_URL}/api/campsite`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch campsites.");
    }
  }

  static async createBooking(bookingData: any): Promise<any> {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        return alert("Token has expired.");
      }
      console.log(token);
      console.log(JSON.stringify(bookingData));
      const response = await fetch(`${BASE_URL}/api/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bookingData),
      });
      return response;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch campsites.");
    }
  }
}

export default ApiService;
