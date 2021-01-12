<template>
  <div class="monProfil">

    <!-- ######################## -->
    <!-- NOM PRENOM ABOUT SECTION -->
    <!-- ######################## -->
    <div id="user-infos-fields">
      <b-field label="Prénom">
        <b-input v-model="user_info.prenom"  value=""></b-input>
      </b-field>

      <b-field label="Nom">
        <b-input v-model="user_info.nom" value=""></b-input>
      </b-field>

      <b-field label="About"
        :label-position="labelPosition">
        <b-input v-model="user_info.about"
         maxlength="200" type="textarea"></b-input>
      </b-field>
      <p class="control buttons">
        <button @click="updateUserInfos" type="submit" class="button is-primary is-focused is-medium">
          Enregistrer
        </button>
      </p>
    </div>

    <hr>

    <!-- #################### -->
    <!-- SOCIAL MEDIA SECTION -->
    <!-- #################### -->
    <div id="user-social-media">
      <b-field label="Social media ids">
        <b-input v-model="social_media_username" id="social_media_input" value="" placeholder="URL/username/id"></b-input>
        <b-select v-model="social_media_id" class="to-hide-mobile" id="social_media_select" 
                  placeholder="Select a social media plateform">
          <option value="Facebook">Facebook</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Twitter">Twitter</option>
          <option value="Orcid">Orcid</option>
        </b-select>
        <div class="to-hide-mobile">
          <p class="control buttons">
            <button @click="addSocialMedia" class="button is-primary is-focused">
            <font-awesome-icon :icon="['fas', 'plus']" size="2x"
              :style="{ color: 'white' }"/>
            </button>
            <button @click="removeSocialMedia" class="button is-primary is-focused">
              <font-awesome-icon :icon="['fas', 'minus']" size="2x"
                :style="{ color: 'white' }"/>
            </button>    
          </p>
        </div>
      </b-field>
      <div class="to-hide-laptop">
        <b-select id="social_media_select" 
                  placeholder="Select a social media plateform">
          <option value="Facebook">Facebook</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Twitter">Twitter</option>
          <option value="Orcid">Orcid</option>
        </b-select>
        <p class="control buttons">
          <button @click="addSocialMedia" class="button is-primary is-focused">
            <font-awesome-icon :icon="['fas', 'plus']" size="2x"
              :style="{ color: 'white' }"/>
          </button>
          <button @click="removeSocialMedia" class="button is-primary is-focused">
            <font-awesome-icon :icon="['fas', 'minus']" size="2x"
              :style="{ color: 'white' }"/>
          </button>
        </p>
      </div>
    </div>

    <hr>

    <!-- ################### -->
    <!-- AFFILIATION SECTION -->
    <!-- ################### -->
    <div id="user-affiliation">
      <b-field>
        <button id="add-affiliation-button" 
          class="button is-primary is-focused is-medium"
          @click="addAffiliation">
        Ajouter une affiliation</button>
      </b-field>

      <b-field label="Organisation"
        :label-position="labelPosition">
        <b-select id="organisation-field"
                  v-model="newAffiliation.organisation">
          <option disabled value="">Select an organisation</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </b-select>       
      </b-field>

      <b-field label="Equipe">
        <b-input id="team-field"
                  v-model="newAffiliation.equipe"></b-input>
      </b-field>

      <div id="dates" class="">
        <b-field label="Durée" class="">
          <b-datepicker
            v-model="newAffiliation.dateDebut" 
            id="date-beginning"
            placeholder="Date de début"
            icon="calendar-today"
            :locale="locale"
            editable>
          </b-datepicker>
          <b-datepicker
            v-model="newAffiliation.dateFin"
            id="date-end"
            placeholder="Date de fin"
            icon="calendar-today"
            :locale="locale"
            editable>
          </b-datepicker>
        </b-field>
      </div>

      <b-field label="Pays">
            <b-select id="country"
                      v-model="newAffiliation.pays">
              <option disabled value="">Select a country</option>
              <option value="Afganistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antigua & Barbuda">Antigua & Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bonaire">Bonaire</option>
              <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
              <option value="Botswana">Botswana</option>
              <option value="Brazil">Brazil</option>
              <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
              <option value="Brunei">Brunei</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Canary Islands">Canary Islands</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Central African Republic">Central African Republic</option>
              <option value="Chad">Chad</option>
              <option value="Channel Islands">Channel Islands</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Christmas Island">Christmas Island</option>
              <option value="Cocos Island">Cocos Island</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Cook Islands">Cook Islands</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cote DIvoire">Cote DIvoire</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Curaco">Curacao</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="East Timor">East Timor</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Falkland Islands">Falkland Islands</option>
              <option value="Faroe Islands">Faroe Islands</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="French Guiana">French Guiana</option>
              <option value="French Polynesia">French Polynesia</option>
              <option value="French Southern Ter">French Southern Ter</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Great Britain">Great Britain</option>
              <option value="Greece">Greece</option>
              <option value="Greenland">Greenland</option>
              <option value="Grenada">Grenada</option>
              <option value="Guadeloupe">Guadeloupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guinea">Guinea</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="Indonesia">Indonesia</option>
              <option value="India">India</option>
              <option value="Iran">Iran</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Isle of Man">Isle of Man</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Korea North">Korea North</option>
              <option value="Korea Sout">Korea South</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Laos">Laos</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libya">Libya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Macau">Macau</option>
              <option value="Macedonia">Macedonia</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Malawi">Malawi</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Martinique">Martinique</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mexico">Mexico</option>
              <option value="Midway Islands">Midway Islands</option>
              <option value="Moldova">Moldova</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Nambia">Nambia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherland Antilles">Netherland Antilles</option>
              <option value="Netherlands">Netherlands (Holland, Europe)</option>
              <option value="Nevis">Nevis</option>
              <option value="New Caledonia">New Caledonia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Niue">Niue</option>
              <option value="Norfolk Island">Norfolk Island</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau Island">Palau Island</option>
              <option value="Palestine">Palestine</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Phillipines">Philippines</option>
              <option value="Pitcairn Island">Pitcairn Island</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Qatar">Qatar</option>
              <option value="Republic of Montenegro">Republic of Montenegro</option>
              <option value="Republic of Serbia">Republic of Serbia</option>
              <option value="Reunion">Reunion</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russia</option>
              <option value="Rwanda">Rwanda</option>
              <option value="St Barthelemy">St Barthelemy</option>
              <option value="St Eustatius">St Eustatius</option>
              <option value="St Helena">St Helena</option>
              <option value="St Kitts-Nevis">St Kitts-Nevis</option>
              <option value="St Lucia">St Lucia</option>
              <option value="St Maarten">St Maarten</option>
              <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
              <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
              <option value="Saipan">Saipan</option>
              <option value="Samoa">Samoa</option>
              <option value="Samoa American">Samoa American</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome & Principe">Sao Tome & Principe</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Swaziland">Swaziland</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syria">Syria</option>
              <option value="Tahiti">Tahiti</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Thailand">Thailand</option>
              <option value="Togo">Togo</option>
              <option value="Tokelau">Tokelau</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad & Tobago">Trinidad & Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Turks & Caicos Is">Turks & Caicos Is</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Erimates">United Arab Emirates</option>
              <option value="United States of America">United States of America</option>
              <option value="Uraguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Vatican City State">Vatican City State</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
              <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
              <option value="Wake Island">Wake Island</option>
              <option value="Wallis & Futana Is">Wallis & Futana Is</option>
              <option value="Yemen">Yemen</option>
              <option value="Zaire">Zaire</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>

            </b-select>
      </b-field>

      <!-- Affiliation Items -->
      <!-- ################# -->
      <ul id="affiliation-registered">

        <li v-for="item in $store.state.user.affiliations" :key="item" class="columns aff-registered-item">
          <div class="column">
            <p class="aff-org">{{item.organisation}}</p>
            <p class="aff-team">{{item.equipe}}</p>
            <p v-if="item.dateDebut != '' && item.dateFin == 'Invalid Date'" class="aff-dates">Depuis {{item.dateDebut}}</p>
            <p v-else class="aff-dates">{{item.dateDebut}} - {{item.dateFin}}</p>
            <p class="aff-pays">{{item.pays}}</p>
          </div>

          
          <div class="column">
              <span class="icon update-delete-icons"
                @click="updateAffiliation(item)">
                <font-awesome-icon :icon="['fas', 'pen']"/>
              </span>
              |
              <span id="delete-button" class="icon update-delete-icons"
                @click="deleteAffiliation(item)">
                <font-awesome-icon :icon="['fas', 'trash-alt']"/>
              </span>
          </div>
          
          <!-- UPDATE ITEM FORM -->
          <div class="column">
            <div class="updateForm to-hide-aff-item">
              <p class="control buttons">
                <button @click="registerUpdate(item)" class="button is-primary is-focused">
                  Enregistrer
                </button>
                <button @click="cancelUpdate(item)" class="button is-primary is-focused">
                  Annuler
                </button>    
              </p>
              <b-field label="Organisation">
                <b-select id="organisation-field-update">
                  <option disabled value="">Select an organisation</option>
                  <option value="Option 1">Option 1</option>
                  <option value="Option 2">Option 2</option>
                </b-select>       
              </b-field>

              <b-field label="Equipe">
                <b-input id="team-field-update"></b-input>
              </b-field>

              <div id="dates" class="">
                <b-field label="Durée" class="">
                  <b-datepicker 
                    id="date-beginning-update"
                    placeholder="Date de début"
                    icon="calendar-today"
                    :locale="locale"
                    editable>
                  </b-datepicker>
                  <b-datepicker
                    id="date-end-update"
                    placeholder="Date de fin"
                    icon="calendar-today"
                    :locale="locale"
                    editable>
                  </b-datepicker>
                </b-field>
              </div>

              <b-field label="Pays">
                    <b-select id="country-update">
                      <option disabled value="">Select a country</option>
                      <option value="Afganistan">Afghanistan</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="American Samoa">American Samoa</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Anguilla">Anguilla</option>
                      <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Aruba">Aruba</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bonaire">Bonaire</option>
                      <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                      <option value="Botswana">Botswana</option>
                      <option value="Brazil">Brazil</option>
                      <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                      <option value="Brunei">Brunei</option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Canary Islands">Canary Islands</option>
                      <option value="Cape Verde">Cape Verde</option>
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Central African Republic">Central African Republic</option>
                      <option value="Chad">Chad</option>
                      <option value="Channel Islands">Channel Islands</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Christmas Island">Christmas Island</option>
                      <option value="Cocos Island">Cocos Island</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo">Congo</option>
                      <option value="Cook Islands">Cook Islands</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Cote DIvoire">Cote DIvoire</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Curaco">Curacao</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">Dominican Republic</option>
                      <option value="East Timor">East Timor</option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">Equatorial Guinea</option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Falkland Islands">Falkland Islands</option>
                      <option value="Faroe Islands">Faroe Islands</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="French Guiana">French Guiana</option>
                      <option value="French Polynesia">French Polynesia</option>
                      <option value="French Southern Ter">French Southern Ter</option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Gibraltar">Gibraltar</option>
                      <option value="Great Britain">Great Britain</option>
                      <option value="Greece">Greece</option>
                      <option value="Greenland">Greenland</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guadeloupe">Guadeloupe</option>
                      <option value="Guam">Guam</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Hawaii">Hawaii</option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="India">India</option>
                      <option value="Iran">Iran</option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Isle of Man">Isle of Man</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Korea North">Korea North</option>
                      <option value="Korea Sout">Korea South</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Laos">Laos</option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libya">Libya</option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Macau">Macau</option>
                      <option value="Macedonia">Macedonia</option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mayotte">Mayotte</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Midway Islands">Midway Islands</option>
                      <option value="Moldova">Moldova</option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Nambia">Nambia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherland Antilles">Netherland Antilles</option>
                      <option value="Netherlands">Netherlands (Holland, Europe)</option>
                      <option value="Nevis">Nevis</option>
                      <option value="New Caledonia">New Caledonia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Niue">Niue</option>
                      <option value="Norfolk Island">Norfolk Island</option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau Island">Palau Island</option>
                      <option value="Palestine">Palestine</option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Phillipines">Philippines</option>
                      <option value="Pitcairn Island">Pitcairn Island</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Republic of Montenegro">Republic of Montenegro</option>
                      <option value="Republic of Serbia">Republic of Serbia</option>
                      <option value="Reunion">Reunion</option>
                      <option value="Romania">Romania</option>
                      <option value="Russia">Russia</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="St Barthelemy">St Barthelemy</option>
                      <option value="St Eustatius">St Eustatius</option>
                      <option value="St Helena">St Helena</option>
                      <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                      <option value="St Lucia">St Lucia</option>
                      <option value="St Maarten">St Maarten</option>
                      <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                      <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                      <option value="Saipan">Saipan</option>
                      <option value="Samoa">Samoa</option>
                      <option value="Samoa American">Samoa American</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Swaziland">Swaziland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syria">Syria</option>
                      <option value="Tahiti">Tahiti</option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Togo">Togo</option>
                      <option value="Tokelau">Tokelau</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Erimates">United Arab Emirates</option>
                      <option value="United States of America">United States of America</option>
                      <option value="Uraguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Vatican City State">Vatican City State</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                      <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                      <option value="Wake Island">Wake Island</option>
                      <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zaire">Zaire</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>

                    </b-select>
              </b-field>
            </div>
          </div>
          
        </li>

      </ul>
      
    </div>
    
    <!-- ##################### -->
    <!-- AVATAR UPLOAD SECTION -->
    <!-- ##################### -->
    <div>
      <b-field class="upload-div">
            <b-upload v-model="dropFiles"
                multiple
                drag-drop class="column">
                <section class="section">
                    <div class="has-text-centered">
                        <p>
                          <font-awesome-icon :icon="['fas', 'upload']" size="2x"
                          :style="{ color: 'white' }"/>
                        </p>
                        <p class="upload-text">Drag and drop avatar here</p>
                    </div>
                </section>
            </b-upload>
        </b-field>
    </div>

  </div>
</template>


<script>
export default {
  name: 'MonProfil',
  data: () => {
    return {
      user_info: {
        id: 0,
        nom: '',
        prenom: '',
        about: ''
      },
      social_media: {
        facebook: '',
        linkedin: '',
        twitter: '',
        orcid: ''
      },
      social_media_id: '',
      social_media_username: '',
      newAffiliation: {
        organisation: '',
        equipe: '',
        dateDebut: '',
        dateFin: '',
        pays: ''
      },
    }
  },
  methods: {
    //USER INFO METHODS
    updateUserInfos: function () {

      if(this.user_info.nom == ''
        && this.user_info.prenom=='' 
        && this.user_info.about==''){
        this.$buefy.notification.open({
        duration: 3000,
        message: 'Fill one of the fields',
        position: 'is-bottom',
        type: 'is-light',
        hasIcon: true
      })
      } else {
        this.user_info.id = this.$store.state.user.infos.id;
        this.$store.dispatch('updateUserInfos_action', this.user_info)
        this.$buefy.notification.open({
        duration: 3000,
        message: 'User information updated',
        position: 'is-bottom',
        type: 'is-light',
        hasIcon: true
      })
        this.user_info = {
          nom: '',
          prenom: '',
          about: ''
        }
      }
    },

    //AFFILIATION METHODS
    addAffiliation: function() {
      if (this.newAffiliation.organisation != '' 
          && this.newAffiliation.pays != '') {

            if(new Date(this.newAffiliation.dateDebut).toLocaleDateString() == 'Invalid Date'
                && new Date(this.newAffiliation.dateFin).toLocaleDateString() != 'Invalid Date') {
                  this.newAffiliation.dateDebut = '';
                  this.newAffiliation.dateFin = '';
                  this.$buefy.notification.open({
                  duration: 3000,
                  message: 'Can\'t have an ending date without a beginning date',
                  position: 'is-bottom',
                  type: 'is-light',
                  hasIcon: true
                })
                } 
                else if (new Date(this.newAffiliation.dateDebut).getTime() >= 
                     new Date(this.newAffiliation.dateFin).getTime() ) {
                  this.newAffiliation.dateDebut = '';
                  this.newAffiliation.dateFin = '';
                  this.$buefy.notification.open({
                  duration: 3000,
                  message: 'Beginning date can\'t be beyond ending date',
                  position: 'is-bottom',
                  type: 'is-light',
                  hasIcon: true
                })
              } else {

                var date1 = new Date(this.newAffiliation.dateDebut);
                var date2 = new Date(this.newAffiliation.dateFin);

                var newAffItem = {
                  organisation: this.newAffiliation.organisation,
                  equipe: this.newAffiliation.equipe,
                  dateDebut: date1.toISOString().split('T')[0],
                  dateFin: date2.toISOString().split('T')[0],
                  pays: this.newAffiliation.pays
                }
                
                this.$store.dispatch('addAffiliation_action',newAffItem);

                this.newAffiliation = {
                  organisation: '',
                  equipe: '',
                  dateDebut: '',
                  dateFin: '',
                  pays: ''
                }
              }
        } else {
        this.$buefy.notification.open({
            duration: 3000,
            message: 'You must fill the form',
            position: 'is-bottom',
            type: 'is-light',
            hasIcon: true
          })
      }
    },

    updateAffiliation: function(item) {
      var i = this.$store.state.user.affiliations.indexOf(item);
      document.getElementsByClassName("updateForm")[i].classList.remove("to-hide-aff-item");
    },

    deleteAffiliation: function(item) {
        var i = this.$store.state.user.affiliations.indexOf(item);
        this.$store.dispatch('deleteAffiliation_action', i);
    },

    //SOCIAL MEDIA METHODS
    addSocialMedia: function() {

      if(this.social_media_id == ''){
        this.$buefy.notification.open({
            duration: 3000,
            message: 'Enter your social media URL/Username/Id',
            position: 'is-bottom',
            type: 'is-light',
            hasIcon: true
          })
      } else {
          switch (this.social_media_id) {
            case 'Facebook':
              this.$store.dispatch('addSocialMedia_action',
              {
                id: this.$store.state.user.infos.id,
                social_media: this.social_media_id,
                identifier: this.social_media_username
              });
              this.social_media_id='';
              this.social_media_username='';
              this.$buefy.notification.open({
                duration: 3000,
                message: 'Facebook link updated',
                position: 'is-bottom',
                type: 'is-light',
                hasIcon: true
              })
              break;

            case 'LinkedIn':
              this.$store.dispatch('addSocialMedia_action',
              {
                id: this.$store.state.user.infos.id,
                social_media: this.social_media_id,
                identifier: this.social_media_username
              });
              this.social_media_id='';
              this.social_media_username='';
              this.$buefy.notification.open({
                duration: 3000,
                message: 'LinkedIn link updated',
                position: 'is-bottom',
                type: 'is-light',
                hasIcon: true
              })
              break;
          
            case 'Twitter':
              this.$store.dispatch('addSocialMedia_action',
              {
                id: this.$store.state.user.infos.id,
                social_media: this.social_media_id,
                identifier: this.social_media_username
              });
              this.social_media_id='';
              this.social_media_username='';
              this.$buefy.notification.open({
                duration: 3000,
                message: 'Twitter link updated',
                position: 'is-bottom',
                type: 'is-light',
                hasIcon: true
              })
              break;

            case 'Orcid':
              this.$store.dispatch('addSocialMedia_action',
              {
                id: this.$store.state.user.infos.id,
                social_media: this.social_media_id,
                identifier: this.social_media_username
              });
              this.social_media_id='';
              this.social_media_username='';
              this.$buefy.notification.open({
                duration: 3000,
                message: 'Orcid link updated',
                position: 'is-bottom',
                type: 'is-light',
                hasIcon: true
              })
              break;
          }
          
      }
    },
    removeSocialMedia: function() {

      if(this.social_media_id == ''){
        this.$buefy.notification.open({
            duration: 3000,
            message: 'Select a social media URL/Username/Id',
            position: 'is-bottom',
            type: 'is-light',
            hasIcon: true
          })
      } else {
        switch (this.social_media_id) {
          case 'Facebook':
            this.$store.dispatch('removeSocialMedia_action', {
              id: this.$store.state.user.infos.id,
              social_media: this.social_media_id 
            });
            this.social_media_id='';
            this.$buefy.notification.open({
              duration: 3000,
              message: 'Facebook link removed',
              position: 'is-bottom',
              type: 'is-light',
              hasIcon: true
            })
            break;

          case 'LinkedIn':
            this.$store.dispatch('removeSocialMedia_action', {
              id: this.$store.state.user.infos.id,
              social_media: this.social_media_id 
            });
            this.social_media_id='';
            this.$buefy.notification.open({
              duration: 3000,
              message: 'LinkedIn link removed',
              position: 'is-bottom',
              type: 'is-light',
              hasIcon: true
            })
            break;
        
          case 'Twitter':
            this.$store.dispatch('removeSocialMedia_action', {
              id: this.$store.state.user.infos.id,
              social_media: this.social_media_id 
            });
            this.social_media_id='';
            this.$buefy.notification.open({
              duration: 3000,
              message: 'Twitter link removed',
              position: 'is-bottom',
              type: 'is-light',
              hasIcon: true
            })
            break;

          case 'Orcid':
            this.$store.dispatch('removeSocialMedia_action', {
              id: this.$store.state.user.infos.id,
              social_media: this.social_media_id 
            });
            this.social_media_id='';
            this.$buefy.notification.open({
              duration: 3000,
              message: 'Orcid link removed',
              position: 'is-bottom',
              type: 'is-light',
              hasIcon: true
            })
            break;
        }
      }      
    },

    //AFFILIATION UPDATE METHODS
    registerUpdate: function (item) {
      var i = this.$store.state.user.affiliations.indexOf(item);
      
      var payload = {
        id: this.$store.state.user.infos.id,
        index: i,
        aff_to_update: item,
        organisation: item.organisation,
        equipe: item.equipe,
        dateDebut: item.dateDebut,
        dateFin: item.dateFin,
        pays: item.pays
      }

      var updateForm = document.getElementsByClassName("updateForm")[i];

      //INDEXES FOR SELECT OBJECTS
      var value1 = updateForm.querySelector('#organisation-field-update').selectedIndex;
      var value2 = updateForm.querySelector('#country-update').selectedIndex;

      //IF THE UPDATE FORM IS EMPTY
      if(value1==-1
        && updateForm.querySelector('#team-field-update').value==''
        && updateForm.querySelector('#date-beginning-update').value==''
        && updateForm.querySelector('#date-end-update').value==''
        && value2==-1){
          this.$buefy.notification.open({
            duration: 3000,
            message: 'You must update a field or cancel the update',
            position: 'is-bottom',
            type: 'is-light',
            hasIcon: true
          })
      } else {//IF AT LEAST ONE FIELD IS FILLED / SELECTED

          //UPDATING ORGANISATION
          if(value1 != -1 &&
            item.organisation !=
             updateForm.querySelector('#organisation-field-update')[value1].value){
               payload.organisation = updateForm.querySelector('#organisation-field-update')[value1].value;
               updateForm.querySelector('#organisation-field-update')[value1].value = '';
               //this.$store.dispatch('updateAffiliation_action',payload);
             }
          
          //UPDATING EQUIPE
          if(updateForm.querySelector('#team-field-update').value != ''){
               payload.equipe = updateForm.querySelector('#team-field-update').value;
               updateForm.querySelector('#team-field-update').value = '';
             } else {
               payload.equipe = '';
             }

          //UPDATING PAYS
          if(value2 != -1 &&
            item.pays !=
             updateForm.querySelector('#country-update')[value2].value){ 
               payload.pays = updateForm.querySelector('#country-update')[value2].value;
               updateForm.querySelector('#country-update')[value2].value = '';
             }
          
          //UPDATING DATE DEBUT
          if(updateForm.querySelector('#date-beginning-update').value != ''){
               var date1 = new Date(updateForm.querySelector('#date-beginning-update').value);
               
               payload.dateDebut = date1.toISOString().split('T')[0];
               updateForm.querySelector('#date-beginning-update').value = '';
             } else {
               payload.dateDebut = null;
             }

          //UPDATING DATE FIN
          if(updateForm.querySelector('#date-end-update').value != '' && payload.dateDebut!=null){     
              var date2 = new Date(updateForm.querySelector('#date-end-update').value);
          
              payload.dateFin = date2.toISOString().split('T')[0]; 
              updateForm.querySelector('#date-end-update').value ='';
             } else {
               payload.dateFin = null;
             }

          if(payload.dateFin != null && payload.dateFin != ''){
            if(new Date(payload.dateDebut).getTime()
              >= new Date(payload.dateFin).getTime()){
              
              
              payload.dateDebut = null;
              payload.dateFin = null;

              this.$buefy.notification.open({
              duration: 3000,
              message: 'The ending date must come beyond the beginning date',
              position: 'is-bottom',
              type: 'is-light',
              hasIcon: true
            })
          }
          }
          
        
        this.$store.dispatch('updateAffiliation_action',payload);
        
        updateForm.classList.add("to-hide-aff-item");

        
        
        
        
        //
        
        
      }
    },
    cancelUpdate: function(item) {
      var i = this.$store.state.user.affiliations.indexOf(item);
      document.getElementsByClassName("updateForm")[i].classList.add("to-hide-aff-item");
    }
  }
}
</script>


<style lang="scss">

.monProfil {
  margin-top: 5%;
  padding-left: 2.5%;
  padding-right: 2.5%;
  display: flex;
  flex-direction: column;
}

//css for registered affiliation list
.aff-org {
  font-size: 150%;
  font-weight: bold;
}

.aff-team {
  font-size: 150%;
}

.aff-dates {
  font-size: 120%;
}

.aff-pays {
  font-size: 150%;
  font-style: italic;
}

#add-affiliation-button {
  margin-bottom: 5%;
}

#user-affiliation {
  margin-bottom: 3%;
}

.affiliation-list-item {
  margin-bottom: 10%;
}

.aff-registered-item {
  margin-bottom: 3%;
}

#dates {
  margin-bottom: 3%;
}

.update-delete-icons {
  color: #344b98;
  font-size: 100%;
}

.update-delete-icons:hover {
  color: #4a4a4a;
}

.update-delete-icons:active {
  color: black;
}

.to-hide-aff-item {
  display: none;
}

//css for upload avatar section
.upload-div {
  background-color: #344b98;
  border-radius: 10px;
}

.upload-text {
  color:white;
  font-size: 150%;
}

.upload-div:hover {
  background-color: #4965c1;
}

#avatar-pic-upload {
  border-style: solid;
  border-color: black;
  display: flex;
  justify-content: center;
  padding-top: 1%;
  padding-bottom: 1%;
}

//css for social media section
#user-social-media {
  margin-bottom: 3%;
}

//css for phone screens
@media (max-width: 768px) {
  #user-social-media {
    margin-bottom: 5%;
  }

  .upload-div {
    margin-top: 20%;
  }

  .to-hide-mobile {
    display: none;
  }
} 

//css for pad-sized screens +
@media (min-width: 1000px) {
  #user-infos-fields {
    margin-right: 65%;
  }

  #user-affiliation {
    margin-right: 60%;
  }

  .to-hide-laptop {
    display: none;
  }

}
</style>
