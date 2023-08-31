import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Http istekleri icin import edildi.
import { User } from '../models/user-model'; //kullanılacak olan user model'i.


const headers = new HttpHeaders({
  'Content-Type': 'application/json' // veri tipinin json oldugu deklare edildi headerda.
});

@Component({
  selector: 'app-user-form', // html tag'deki ismi..
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  user: User = new User();
  apiUrl = 'https://localhost:7133/api/Test/SaveUser' //7133. portta ayağa kalkmış servise istek atılacak.(Test controller SaveUser metoduna)

  constructor(private http: HttpClient) { } 

  //button submit edildiginde.
  saveUser(){

    //console.log(this.user);
    this.http.post(this.apiUrl, this.user, { headers: headers }).subscribe(
      (response) => {
        //eger post istegi basarılıysa...

        this.showNotification("success", "Başarıyla kaydedildi"); // Bilgilendirme mesajı cagır.(basarılı)
        //console.log("Başarıyla kaydedildi...");
      },
      (error) => {

        this.showNotification("danger", "Kayıt başarısız"); // Bilgilendirme mesajı cagır.(basarısız)
        //console.log("Başarısızz..");
      }
    );

  }


  //mesaja ve type'a göre olusturulan elementi alerts container elementinin childi'i seklinde olustur...
  showNotification(type:string, message:string) {
    const alertElement = document.createElement("div");
    alertElement.classList.add("alert", `alert-${type}`, "mt-3");
    alertElement.textContent = message;
  
    const alertsContainer = document.getElementById("alerts-container");
    alertsContainer!.appendChild(alertElement);
    
    setTimeout(() => {
      alertElement.remove();
    }, 3000); // 3 saniye sonra uyarıyı kaldır
  }

}