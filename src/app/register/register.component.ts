import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  optionalLabelText!: string;
  optionalLabelTextChoices: string[] = ['Option 1', 'Option 2', 'Option 3'];
  constructor() { }

  ngOnInit(): void {
  }

  person_title: person_title[] = [
    {value: 'mr', viewValue: 'Mr'},
    {value: 'mrs', viewValue: 'Mrs'},
    {value: 'miss', viewValue: 'Miss'},
  ];

  person_fit: person_fit[] = [
    {value: 'fir', viewValue: 'Physically Fit'},
    {value: 'assistance', viewValue: 'Need Assistance'},

  ];

  blood_group: blood_group[] = [
    {value: 'O+', viewValue: 'O +ve'},
    {value: 'O-', viewValue: 'O -ve'},
    {value: 'A+', viewValue: 'A +ve'},
    {value: 'A-', viewValue: 'A -ve'},
    {value: 'B+', viewValue: 'B +ve'},
    {value: 'B-', viewValue: 'B –ve'},
    {value: 'AB+', viewValue: 'AB +ve'},
    {value: 'AB-', viewValue: 'AB –ve'},
  ];

  state: state[] = [
    {value: 'Andhra Pradesh', viewValue: 'Andhra Pradesh'},
    {value: 'Arunachal Pradesh', viewValue: 'Arunachal Pradesh'},
    {value: 'Assam', viewValue: 'Assam'},
    {value: 'Bihar', viewValue: 'Bihar'},
    {value: 'Chhattisgarh', viewValue: 'Chhattisgarh'},
    {value: 'Goa', viewValue: 'Goa'},
    {value: 'Gujarat', viewValue: 'Gujarat'},
    {value: 'Haryana', viewValue: 'Haryana'},
    {value: 'Himachal Pradesh', viewValue: 'Himachal Pradesh'},
    {value: 'Jharkhand', viewValue: 'Jharkhand'},
    {value: 'Karnataka', viewValue: 'Karnataka'},
    {value: 'Kerala', viewValue: 'Kerala'},
    {value: 'Madhya Pradesh', viewValue: 'Madhya Pradesh'},
    {value: 'Maharashtra', viewValue: 'Maharashtra'},
    {value: 'Manipur', viewValue: 'Manipur'},
    {value: 'Meghalaya', viewValue: 'Meghalaya'},
    {value: 'Mizoram', viewValue: 'Mizoram'},
    {value: 'Nagaland', viewValue: 'Nagaland'},
    {value: 'Odisha', viewValue: 'Odisha'},
    {value: 'Punjab', viewValue: 'Punjab'},
    {value: 'Rajasthan', viewValue: 'Rajasthan'},
    {value: 'Sikkim', viewValue: 'Sikkim'},
    {value: 'Tamil Nadu', viewValue: 'Tamil Nadu'},
    {value: 'Telangana', viewValue: 'Telangana'},
    {value: 'Tripura', viewValue: 'Tripura'},
    {value: 'Uttar Pradesh', viewValue: 'Uttar Pradesh'},
    {value: 'Uttarakhand', viewValue: 'Uttarakhand'},
    {value: 'West Bengal', viewValue: 'West Bengal'},

  ];


  pokemonControl = new FormControl('');
  pokemonGroups: PokemonGroup[] = [
    {
      name: 'Andaman and Nicobar Islands',
      pokemon: [
        {value: 'Port Blair', viewValue: 'Port Blair'},
      ],
    },
    {
      name: 'Andhra Pradesh',
      pokemon: [
        {value: 'Visakhapatnam', viewValue: 'Visakhapatnam'},
        {value: 'Vijayawada', viewValue: 'Vijayawada'},
        {value: 'Guntur', viewValue: 'Guntur'},
        {value: 'Nellore', viewValue: 'Nellore'},
        {value: 'Tirupati', viewValue: 'Tirupati'},

      ],
    },
    {
      name: 'Arunachal Pradesh',

      pokemon: [
        {value: 'Tawang', viewValue: 'Tawang'},
        {value: 'Bhismaknagar', viewValue: 'Bhismaknagar'},
        {value: 'Pasighat', viewValue: 'Pasighat'},
        {value: 'Ziro ', viewValue: 'Ziro '},
        {value: 'Bomdila', viewValue: 'Bomdila'},
      ],
    },
    {
      name: 'Assam',
      pokemon: [
        {value: 'Guwahati', viewValue: 'Guwahati'},
        {value: 'Tezpur', viewValue: 'Tezpur'},
        {value: 'Dibrugarh', viewValue: 'Dibrugarh'},
        {value: 'Silchar', viewValue: 'Silchar'},
        {value: 'North Lakhimpur', viewValue: 'North Lakhimpur'},

      ],
    },
    {
      name: 'Bihar',
      pokemon: [
        {value: 'Gaya', viewValue: 'Gaya'},
        {value: 'Biharsharif', viewValue: 'Biharsharif'},
        {value: 'Darbhanga', viewValue: 'Darbhanga'},
        {value: 'Bhagalpur', viewValue: 'Bhagalpur'},
      ],
    },
    {
      name: 'Chandigarh',
      pokemon: [
        {value: 'Chandigarh', viewValue: 'Chandigarh'},

      ],
    },
    {
      name: 'Chhattisgarh',
      pokemon: [
        {value: 'Bilaspur', viewValue: 'Bilaspur'},
        {value: 'Korba', viewValue: 'Korba'},
        {value: 'Durg-Bhilainagar', viewValue: 'Durg-Bhilainagar'},
        {value: 'Raigarh', viewValue: 'Raigarh'},
        {value: 'Rajnandgaon', viewValue: 'Rajnandgaon'},
      ],
    },
    {
      name: 'Dadra and Nagar Haveli and Daman and Diu',
      pokemon: [
        {value: 'Daman', viewValue: 'Daman'},

      ],
    },
    {
      name: 'Goa',
      pokemon: [
        {value: 'Panaji', viewValue: 'Panaji'},

      ],
    },
    {
      name: 'Gujarat',
      pokemon: [
        {value: 'Ahmedabad', viewValue: 'Ahmedabad'},
        {value: 'Surat', viewValue: 'Surat'},
        {value: 'Rajkot', viewValue: 'Rajkot'},
        {value: 'Junagadh', viewValue: 'Junagadh'},
        {value: 'Vadodara', viewValue: 'Vadodara'},
      ],
    },
    {
      name: 'Haryana',
      pokemon: [
        {value: 'Faridabad', viewValue: 'Faridabad'},
        {value: 'Gurgaon', viewValue: 'Gurgaon'},
        {value: 'Sonipat', viewValue: 'Sonipat'},
        {value: 'Panipat', viewValue: 'Panipat'},
        {value: 'Ambala', viewValue: 'Ambala'},
      ],
    },
    {
      name: 'Himachal Pradesh',
      pokemon: [
        {value: 'Dharamshala', viewValue: 'Dharamshala'},
        {value: 'Mandi', viewValue: 'Mandi'},
        {value: 'Solan', viewValue: 'Solan'},
        {value: 'Bilaspur', viewValue: 'Bilaspur'},
        {value: 'Chamba', viewValue: 'Chamba'},
      ],
    },
    {
      name: 'Jharkhand',
      pokemon: [
        {value: 'Bokaro Steel City', viewValue: 'Bokaro Steel City'},
        {value: 'Jamshedpur', viewValue: 'Jamshedpur'},
        {value: 'Deoghar', viewValue: 'Deoghar'},
        {value: 'Hazaribagh', viewValue: 'Hazaribagh'},
        {value: 'Dhanbad', viewValue: 'Dhanbad'},
      ],
    },
    {
      name: 'Karnataka',
      pokemon: [
        {value: 'Mysore', viewValue: 'Mysore'},
        {value: 'Davangere', viewValue: 'Davangere'},
        {value: 'Mangalore', viewValue: 'Mangalore'},
        {value: 'Hubli-Dharwad', viewValue: 'Hubli-Dharwad'},
        {value: 'Belgaum', viewValue: 'Belgaum'},
      ],
    },
    {
      name: 'Kerala',
      pokemon: [
        {value: 'Kochi', viewValue: 'Kochi'},
        {value: 'Kozhikode', viewValue: 'Kozhikode'},
        {value: 'Thrissur', viewValue: 'Thrissur'},
        {value: 'Malappuram', viewValue: 'Malappuram'},

      ],
    },
    {
      name: 'Madhya Pradesh',
      pokemon: [
        {value: 'Indore', viewValue: 'Indore'},
        {value: 'Gwalior', viewValue: 'Gwalior'},
        {value: 'Jabalpur', viewValue: 'Jabalpur'},
        {value: 'Ujjain', viewValue: 'Ujjain'},
        {value: 'Sagar', viewValue: 'Sagar'},
      ],
    },
    {
      name: 'Maharashtra',
      pokemon: [
        {value: 'Pune', viewValue: 'Pune'},
        {value: 'Nagpur', viewValue: 'Nagpur'},
        {value: 'Nashik', viewValue: 'Nashik'},
        {value: 'Aurangabad', viewValue: 'Aurangabad'},
        {value: 'Solapur', viewValue: 'Solapur'},
      ],
    },
    {
      name: 'Manipur',
      pokemon: [
        {value: 'Bishnupur', viewValue: 'Bishnupur'},
        {value: 'Ukhrul', viewValue: 'Ukhrul'},
        {value: 'Tamenglong', viewValue: 'Tamenglong'},
        {value: 'Chandel', viewValue: 'Chandel'},
        {value: 'Senapati', viewValue: 'Senapati'},
      ],
    },
    {
      name: 'Meghalaya',
      pokemon: [
        {value: 'Cherrapunji', viewValue: 'Cherrapunji'},
        {value: 'Tura', viewValue: 'Tura'},
        {value: 'Jowai', viewValue: 'Jowai'},
        {value: 'Baghmara', viewValue: 'Baghmara'},
        {value: 'Nongpoh', viewValue: 'Nongpoh'},
      ],
    },
    {
      name: 'Mizoram',
      pokemon: [
        {value: 'Lunglei', viewValue: 'Lunglei'},
        {value: 'Serchhip', viewValue: 'Serchhip'},
        {value: 'Champhai', viewValue: 'Champhai'},
        {value: 'Tuipang', viewValue: 'Tuipang'},
        {value: 'Mamit', viewValue: 'Mamit'},
      ],
    },
    {
      name: 'Nagaland',
      pokemon: [
        {value: 'Tuensang', viewValue: 'Tuensang'},
        {value: 'Zunheboto', viewValue: 'Zunheboto'},
        {value: 'Mokokchung', viewValue: 'Mokokchung'},
        {value: 'Kiphire Sadar', viewValue: 'Kiphire Sadar'},
        {value: 'Phek', viewValue: 'Phek'},
      ],
    },
    {
      name: 'Odisha',
      pokemon: [
        {value: 'Rourkela', viewValue: 'Rourkela'},
        {value: 'Cuttack', viewValue: 'Cuttack'},
        {value: 'Brahmapur', viewValue: 'Brahmapur'},
        {value: 'Puri', viewValue: 'Puri'},
        {value: 'Sambalpur', viewValue: 'Sambalpur'},
      ],
    },
    {
      name: 'Punjab',
      pokemon: [
        {value: 'Amritsar', viewValue: 'Amritsar'},
        {value: 'Jalandhar', viewValue: 'Jalandhar'},
        {value: 'Ludhiana', viewValue: 'Ludhiana'},
        {value: 'Patiala', viewValue: 'Patiala'},
        {value: 'Kapurthala', viewValue: 'Kapurthala'},
      ],
    },
    {
      name: 'Rajasthan',
      pokemon: [
        {value: 'Bikaner', viewValue: 'Bikaner'},
        {value: 'Jaisalmer', viewValue: 'Jaisalmer'},
        {value: 'Jodhpur', viewValue: 'Jodhpur'},
        {value: 'Udaipur', viewValue: 'Udaipur'},
        {value: 'Ajmer', viewValue: 'Ajmer'},
      ],
    },
    {
      name: 'Sikkim',
      pokemon: [
        {value: 'Namchi', viewValue: 'Namchi'},
        {value: 'Gyalshing', viewValue: 'Gyalshing'},
        {value: 'Mangan', viewValue: 'Mangan'},
        {value: 'Rabdentse', viewValue: 'Rabdentse'},

      ],
    },
    {
      name: 'Tamil Nadu',
      pokemon: [
        {value: 'Tiruchirappalli', viewValue: 'Tiruchirappalli'},
        {value: 'Madurai', viewValue: 'Madurai'},
        {value: 'Erode', viewValue: 'Erode'},
        {value: 'Vellore', viewValue: 'Vellore'},
        {value: 'Coimbatore', viewValue: 'Coimbatore'},
      ],
    },
    {
      name: 'Telangana',
      pokemon: [
        {value: 'Warangal', viewValue: 'Warangal'},
        {value: ' Nizamabad ', viewValue: ' Nizamabad '},
        {value: ' Karimnagar', viewValue: ' Karimnagar'},
        {value: 'Adilabad', viewValue: 'Adilabad'},
        {value: 'Khammam', viewValue: 'Khammam'},
      ],
    },
{
      name: 'Tripura',
      pokemon: [
        {value: 'Amarpur', viewValue: '	Amarpur'},
        {value: ' Kumarghat ', viewValue: '  Kumarghat'},
        {value: 'Udaipur,', viewValue: 'Udaipur,'},
        {value: ' Gakulnagar', viewValue: 'Gakulnagar'},
        {value: 'Kunjaban', viewValue: 'Kunjaban'},
      ],
    },
{
      name: 'Uttar Pradesh',
      pokemon: [
        {value: 'Noida', viewValue: 'Noida'},
        {value: ' Varanasi', viewValue: ' Varanasi'},
        {value: 'Allahabad,', viewValue: 'Allahabad,'},
        {value: 'Agra', viewValue: 'Agra'},
        {value: 'Kanpur', viewValue: ' Kanpur '},
      ],
    },
{
      name: 'Uttarakhand',
      pokemon: [
        {value: 'Haridwar', viewValue: 'Haridwar'},
        {value: 'Roorkee', viewValue: 'Roorkee'},
        {value: 'Rishikesh,', viewValue: 'Rishikesh,'},
        {value: 'Kashipur', viewValue: ' Kashipur'},
        {value: 'Haldwani', viewValue: ' Haldwani '},
      ],
    },
{
      name: 'West Bengal',
      pokemon: [
        {value: 'Darjeeling', viewValue: 'Darjeeling'},
        {value: 'Siliguri', viewValue: 'Siliguri'},
        {value: 'Asansol', viewValue: 'Asansol'},
        {value: 'Howrah', viewValue: 'Howrah'},
        {value: 'Durgapur', viewValue: 'Durgapur'},
      ],
    },
  ];

}
interface person_title {
  value: string;
  viewValue: string;
}

interface person_fit {
  value: string;
  viewValue: string;
}

interface blood_group {
  value: string;
  viewValue: string;
}

interface state {
  value: string;
  viewValue: string;

}

interface Pokemon {
  value: string;
  viewValue: string;
}

interface PokemonGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
  
}
