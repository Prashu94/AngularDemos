import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.css']
})
export class Exercise3Component implements OnInit {
  password!:string;
  confirmPassword: string;
  
  constructor() { }

  ngOnInit(): void {
  }

  getPasswordStrength(): string{
    const strongRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$._])[A-Za-z\d@$._]{8,}$/;
    const goodRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$._])[A-Za-z\d@$._]{8,}$/;
    
    if(strongRegex.test(this.password)){
      return "Strong Password";
    }else if(goodRegex.test(this.password)){
      return "Good Password";
    }else{
      return "Weak Password";
    }
  }

  getPasswordStrengthColor():string{
    const strongRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$._])[A-Za-z\d@$._]{8,}$/;
    const goodRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$._])[A-Za-z\d@$._]{8,}$/;
    
    if(strongRegex.test(this.password)){
      return "#9bfaa3";
    }else if(goodRegex.test(this.password)){
      return "#faf332";
    }else{
      return "#e34034";
    }
  }

  checkPassword(): string{
    if(this.confirmPassword === this.password){
      return "Password Match";
    }else{
      return "Password Do Not Match";
    }
  }

  checkPasswordColor(): string{
    if(this.confirmPassword === this.password){
      return "#9bfaa3";
    }else{
      return "#fa776e";
    }
  }
}
