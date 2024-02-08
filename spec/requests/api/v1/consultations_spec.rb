require 'swagger_helper'

RSpec.describe 'api/v1/consultations', type: :request do
  let(:user) { create(:user) }
  let(:engineer) { create(:engineer) }
  before do
    login_as(user)
    engineer
  end

  # rubocop:disable Metrics/BlockLength
  path '/api/v1/consultations' do
    get('list consultations') do
      response(200, 'successful') do
        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end

    post('create consultation') do
      consumes 'application/json'
      parameter name: :consultation, in: :body, schema: {
        type: :object,
        properties: {
          date: { type: :string },
          city: { type: :string },
          user_id: { type: :integer },
          engineer_id: { type: :integer }
        },
        required: %w[date time user_id engineer_id]
      }

      response(200, 'successful') do
        let(:consultation) { create(:consultation, user_id: user.id, engineer_id: engineer.id) }
        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true) # You'll want to customize the parameter types.

            }
          }
        end
        run_test!
      end
    end
  end

  path '/api/v1/consultations/{id}' do
    # You'll want to customize the parameter types.
    parameter name: 'id', in: :path, type: :string, description: 'id'

    delete('delete consultation') do
      response(200, 'successful') do
        let(:consultation) { create(:consultation, user_id: user.id, engineer_id: engineer.id) }
        let(:id) { consultation.id }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end
  end
end

# rubocop:enable Metrics/BlockLength
