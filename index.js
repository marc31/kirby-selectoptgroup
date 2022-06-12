panel.plugin("marcf/selectoptgroup", {
  fields: {
    selectoptgroup: {
      props: {
        disabled: Boolean,
        help: String,
        label: String,
        required: Boolean,
        when: String,
        value: String,
        options: Object,
      },
      data() {
        return {
          selectValue: "",
          selectLabel: " - ",
        };
      },
      methods: {
        changeSelect() {
          const select = this.$refs.select;
          this.selectLabel = select.options[select.selectedIndex].text;
          this.selectValue = select.options[select.selectedIndex].value;
          this.$emit("input", this.selectValue);
        },
        setValue() {
          const opt = this.$refs.select.querySelector(
            `option[value="${this.value}"]`
          );
          if (opt) {
            this.selectValue = this.value;
            this.selectLabel = opt.text;
          } else {
            this.selectValue = "";
            this.selectLabel = " - ";
          }
        },
      },
      mounted() {
        this.setValue();
      },
      watch: {
        value: function () {
          this.setValue();
        },
      },
      template: `
        <k-field 
          class="k-select-field" 
          :disabled="disabled"
          :help="help"
          :label="label"
          :required="required"
          :when="when"
          >
            <div data-theme="field" data-type="select" class="k-input">
              <span class="k-input-element">
                <span class="k-select-input">
                  <select v-model="selectValue" ref="select" @change="changeSelect" name="histoire_services" :required="required" class="k-select-input-native">
                    <option disabled value=""> — </option>
                    <optgroup v-for="(optgrpVal, optgrpName) in options" :label="optgrpVal.label">
                      <option v-for="(val, key) in optgrpVal.options" :value="optgrpName + '-' + key">{{val}}</option>
                    </optgroup>
                  </select>
                  {{selectLabel}}
                </span>
              </span>
              <span class="k-input-icon">
                <span aria-hidden="true" class="k-icon k-icon-angle-down">
                  <svg viewBox="0 0 16 16"><use xlink:href="#icon-angle-down"></use></svg>
                </span>
              </span>
            </div>
        </k-field>
      `,
    },
  },
});
