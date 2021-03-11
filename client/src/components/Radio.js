function Radio(props) {
    return (
        <div class="field">
            <div class="control">
                <label class="radio">
                    <input type="radio" name="question" />
                    Yes
                </label>
                <label class="radio">
                    <input type="radio" name="question" />
                    No
                </label>
            </div>
        </div>
    )
}

export default Radio;