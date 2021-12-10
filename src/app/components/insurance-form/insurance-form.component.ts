import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpClientService } from 'src/services/httpRequestService/http-client.service';

@Component({
  selector: 'app-insurance-form',
  templateUrl: './insurance-form.component.html',
  styleUrls: ['./insurance-form.component.css']
})
export class InsuranceFormComponent implements OnInit {
  
  insuranceForm: FormGroup;
  private _formStep: number;
  total: number;

  //FOR THE SAKE OF TIME I LEFT THESE 2 LIST MENU OPTIONS STATIC BUT IDEAL THEY SHOULD BE RETRIEVED
  //FROM THE BACKEND
  occupationList: string[] = [
    '',
    'Cleaner',
    'Doctor',
    'Author',
    'Farmer',
    'Mechanic',
    'Florist',
  ];

  stateList: string[] = [
    '',
    'state1',
    'state2'
  ];

  constructor(private _formBuilder: FormBuilder, private _httpClientService: HttpClientService) {
    this.insuranceForm = this.initFormGroup();
    this._formStep = 1;
    this.total = 0;
   }

  ngOnInit(): void {
  }

  onSubmit() {
    //console.warn(this.insuranceForm.value);
    this._httpClientService.submitInsuranceForm(this.insuranceForm.value)
    .subscribe(response => {
      if(response.status === 200){
        this.total = response.body;
      }
    }
    );
  }
  

  initFormGroup(): FormGroup {
    return this._formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(105)]],
      dob: ['', Validators.required],
      occupation:['', Validators.required],
      sumInsured: ['', [Validators.required, Validators.min(1000), Validators.max(1000000)]],
      monthlyExpenses: ['', Validators.required],
      state: ['', Validators.required],
      postCode: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
    });
  }

  get formStep(): number {
    return this._formStep;
  }

  incrementFormStep(): void {
    if(this._formStep == 1)
    {
      this._formStep = this._formStep + 1;
    }
  }

  decrementFormStep(): void {
    if(this._formStep == 2)
    {
      this._formStep = this._formStep - 1;
    }
  }

  isInsuranceFormPartOneValid() {
    return !(this.insuranceForm.get('name')?.valid &&
      this.insuranceForm.get('age')?.valid &&
      this.insuranceForm.get('dob')?.valid);
  }
}
