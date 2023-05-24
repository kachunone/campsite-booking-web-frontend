const BASE_URL = process.env.REACT_APP_BASE_URL;

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
      throw new Error("Failed to create booking.");
    }
  }

  static async getBookingsByUserId(): Promise<any> {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        return alert("Token has expired.");
      }
      const response = await fetch(`${BASE_URL}/api/booking`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch bookings.");
    }
  }

  static async cancelBooking(bookingId: string): Promise<any> {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        return alert("Token has expired.");
      }
      const response = await fetch(`${BASE_URL}/api/booking/${bookingId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to cancel booking.");
    }
  }
}

export default ApiService;
